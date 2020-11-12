import React from 'react';
import { StyleSheet, Text, View, Dimensions, } from 'react-native';
import { colors, } from '../lib/colors';
import CalendarHeatmap from 'react-native-calendar-heatmap';

function HomeAllCommitList() {  
  return (    
    <View style={styles.container}>
      <CalendarHeatmap
        endDate={new Date("2020-11-09")}
        numDays={100}
        values={staticData}
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

  
export const staticData = [
  { date: "2020-11-09" },
  { date: "2020-11-09" },
  { date: "2020-11-04" },
  { date: "2020-11-09" },
  { date: "2020-11-05" },
  { date: "2020-11-09" },
  { date: "2020-11-08" },
  { date: "2020-11-08" },
];

export default HomeAllCommitList;
