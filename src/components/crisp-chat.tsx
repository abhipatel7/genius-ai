'use client';

import { Crisp } from 'crisp-sdk-web';
import { useEffect } from 'react';

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure('bcda1b6e-1823-4f78-a843-9f97d12bdc6b');
  }, []);

  return null;
}
