import { useEffect, useRef, useState } from 'react';
import { User } from '@/graphql/ogm';
import { Model } from '@neo4j/graphql-ogm';
import { User as UserT } from '../graphql/ogm-types';



export const generateApiKey = () => {
  const length = 32;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
