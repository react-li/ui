import React from 'react';
import { defaultSort, useOriginalValueSort } from './utility';
import { Link } from 'react-router';

export default [{
  displayName: 'ID',
  field: 'match_id',
  width: 2,
  sortFn: defaultSort,
  displayFn: ({ field }) => <Link to={`/matches/${field.display}`}>{field.display}</Link>,
}, {
  displayName: 'Hero',
  field: 'hero_id',
  width: 1.5,
  sortFn: defaultSort,
  displayFn: ({ field }) => <img src={field.display} style={{ height: 30 }} role="presentation" />,
}, {
  displayName: 'W/L',
  field: 'radiant_win',
  width: 1.5,
  sortFn: defaultSort,
}, {
  displayName: 'Mode',
  field: 'game_mode',
  width: 2.5,
  sortFn: defaultSort,
}, {
  displayName: 'Date',
  field: 'start_time',
  width: 2,
  sortFn: useOriginalValueSort,
}, {
  displayName: 'Duration',
  field: 'duration',
  width: 2,
  sortFn: useOriginalValueSort,
}, {
  displayName: 'Kills',
  field: 'kills',
  width: 1.8,
  sortFn: defaultSort,
}, {
  displayName: 'Deaths',
  field: 'deaths',
  width: 1.8,
  sortFn: defaultSort,
}, {
  displayName: 'Assists',
  field: 'assists',
  width: 1.8,
  sortFn: defaultSort,
}];
