import React, { useEffect, useState, } from 'react';
import { StyleSheet, View, } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../shared-interfaces';
import Header from '../../containers/HomeHeader';
import TodayCommit from '../../components/HomeTodayCommit';
import FirstRepoList from '../../components/HomeFirstCommitHistory';
import AllCommitList from '../../containers/HomeAllCommitList';
import Setting from '../../containers/HomeSetting';
import { useDispatch, useSelector, } from 'react-redux';
import { RootState, } from '../../stores';
import { 
  getRepoListAsync, 
  getCommitListAsync,
  getUserNameAsync,
  GithubRepoListState, 
  GithubUserNameState,
  GithubCommitListState, 
  GithubState, 
} from '../../stores/github';
import { setCommitList, } from '../../stores/todayCommit';
import { CommitList } from '../../api/githubCommitList';

export type Props = StackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ route, }: Props ) {
  const dispatch = useDispatch();
  
  const accessToken = useSelector((state: RootState) => (state.github as GithubState).accessToken).data?.access_token;

  const userName = useSelector((state: RootState) => (state.github as GithubUserNameState).userName).data?.login;
  const userNameLoading = useSelector((state: RootState) => (state.github as GithubUserNameState).userName).loading;
  const userNameError = useSelector((state: RootState) => (state.github as GithubUserNameState).userName).error;
  
  const repoList = useSelector((state: RootState) => (state.github as GithubRepoListState).repoList).data;
  const repoListLoading = useSelector((state: RootState) => (state.github as GithubRepoListState).repoList).loading;
  const repoListError = useSelector((state: RootState) => (state.github as GithubRepoListState).repoList).error;

  const commitList = useSelector((state: RootState) => (state.github as GithubCommitListState).commitList).data;
  const commitListLoading = useSelector((state: RootState) => (state.github as GithubCommitListState).commitList).loading;
  const commitListError = useSelector((state: RootState) => (state.github as GithubCommitListState).commitList).error;

  const todayCommitList = useSelector((state: RootState) => state.todayCommitList.todayCommitList);
  
  useEffect(() => {
    dispatch(getRepoListAsync.request({
      token: `Bearer ${accessToken}`,
    }));
  }, [accessToken,]);

  useEffect(() => {
    dispatch(getUserNameAsync.request({
      token: `Bearer ${accessToken}`,
    }));
  }, [accessToken,]);

  useEffect(() => {
    if (!repoList) {
      return;
    }

    repoList.forEach(repo => {
      dispatch(getCommitListAsync.request({
        token: `Bearer ${accessToken}`,
        fullName: repo.full_name,
      }));
    });    
  }, [repoList,]);

  useEffect(() => {
    if (!userName) {
      return;
    }

    if (!commitList) {
      return;
    }

    const _todayCommitList = Object.entries(commitList)
      .map(commit => {
        const data = commit[1];
        const todayTimestamp = new Date();  
        const commitTimestamp = new Date(data.committer?.timestamp).getTime();
        let todayTimestamp00_00: number = 0;
        let todayTimestamp24_00: number = 0;

        todayTimestamp.setHours(0);
        todayTimestamp.setMinutes(0);
        todayTimestamp.setSeconds(0);
        todayTimestamp00_00 = todayTimestamp.getTime();
        todayTimestamp.setHours(23);
        todayTimestamp.setMinutes(59);
        todayTimestamp.setSeconds(59);
        todayTimestamp24_00 = todayTimestamp.getTime();

        if (data.committer?.name !== userName) {
          return;
        }

        if (commitTimestamp <= todayTimestamp00_00) {
          return;
        }

        if (commitTimestamp > todayTimestamp24_00) {
          return;
        }

        return data;
      })
      .filter((each): each is CommitList => each !== undefined)
      .sort((a: CommitList, b: CommitList) => {
        return new Date(a.committer?.timestamp).getTime() - new Date(b.committer?.timestamp).getTime();
      });
    console.log(`result`, _todayCommitList);
  }, [commitList,]);

  return (
    <View style={styles.container}>
      <Header userName={userName  || ``} />
      <TodayCommit count={3} />
      <FirstRepoList message={`새기능 #32 로그인 페이지 구현`}/>
      <AllCommitList />
      <Setting />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',    
    backgroundColor: '#fff',
    overflow: 'scroll',
  },
});
