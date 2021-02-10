import React, { useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const Pool_Data = {
  UserPoolId: 'us-east-1_IEyFfUupx',
  ClientId: '63fc9g5c3g9vhqdalrv9eqhoa2',
};

export default function useHandler() {
  const [state, setstate] = useState({
    loading: false,
    isAuthenticated: false
  })

  const { loading, isAuthenticated } = state;

  const userPool = new CognitoUserPool(Pool_Data)

  const getAuthenticatedUser = () => {
    return userPool.getCurrentUser()
  }

  return {
    loading,
    isAuthenticated,
    userPool,
    getAuthenticatedUser
  }
};











