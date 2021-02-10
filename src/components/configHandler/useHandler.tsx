import React, { useState, useCallback, useEffect, useMemo } from 'react';
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

  const getAuthenticatedUser = useCallback(() => {
    return userPool.getCurrentUser();
  },
    [],
  );

  useEffect(() => {
    getAuthenticatedUser()
  }, [getAuthenticatedUser])

  const signOut = () => {
    return userPool.getCurrentUser()?.signOut()
  }

  return {
    loading,
    isAuthenticated,
    userPool,
    getAuthenticatedUser,
    signOut
  }
};











