import React from 'react';
import api from '~/services/api';

export default function Dashboard() {
  api.get('appointments?page=1');

  return <h1>dash</h1>;
}
