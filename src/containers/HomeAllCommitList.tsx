import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { colors, } from '../lib/colors';
import CalendarHeatmap from 'react-native-calendar-heatmap';

type Props = {
  dates: {
    date: string;
  }[];
}

function HomeAllCommitList({
  dates,
}: Props) {  
  return (    
    <View style={styles.container}>
      <CalendarHeatmap
        endDate={new Date()}
        numDays={100}
        values={dates}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  text: {
    color: colors.main,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export const testData = [
  { date: `2020-11-02` },
];

export default HomeAllCommitList;
