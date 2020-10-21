import React, { useState, useEffect } from 'react';
import { getSinglePost } from '../client'

export default function useSinglePost(slug) {
  const promise = getSinglePost(slug);

  const [post, setPost] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(result => {
      setPost(result[0].fields);
      setLoading(false);
    });
  }, []);

  return [post, isLoading]
}