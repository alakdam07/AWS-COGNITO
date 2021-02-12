import React, { useCallback, useEffect } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const Pool_Data = {
  UserPoolId: "us-east-1_9gLKIVCjP",
  ClientId: "629n5o7ahjrpv6oau9reo669gv"
};

export default function useHandler() {

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
    userPool,
    getAuthenticatedUser,
    signOut
  }
};











