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

  const userName = useSelector((state: RootState) => (state.github as GithubUserNameState).userName).data?.name;
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
        const repoName = commit[0];
        const commits = commit[1];

        const filterCommit = commits.map(data => {        
          if (data.commit?.author.name !== userName) {
            return;
          }
          
          return data;
        })
        .filter((each): each is CommitList => each !== undefined);

        return [repoName, filterCommit];
      })
      .filter((each): each is [string, CommitList[]] => each[1].length !== 0)
      .map(each => each[1])
      .flat()
      .map(each => {
        return {
          timestamp: new Date(each.commit.author.date).getTime(),
          message: each.commit.message,
        }
      })
      .sort((a, b) => {
        return b.timestamp - a.timestamp;
      });

    dispatch(setCommitList(_todayCommitList))
  }, [commitList,]);

  return (
    <View style={styles.container}>
      <Header userName={userName  || ``} />
      <TodayCommit count={todayCommitList.length} />
      <FirstRepoList message={todayCommitList[0]?.message || ``}/>
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
