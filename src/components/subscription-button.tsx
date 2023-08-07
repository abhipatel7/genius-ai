'use client';

import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Zap } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

interface Props {
  isPro: boolean;
}

export default function SubscriptionButton({ isPro = false }: Props) {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (error) {
      toast.error('Something went wrong');
      console.log('BILLING_ERROR', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      onClick={onClick}
      variant={isPro ? 'default' : 'premium'}
    >
      {isPro ? 'Manage Subscription' : 'Upgrade'}
      {!isPro && <Zap className="h-4 w-4 fill-white ml-2" />}
    </Button>
  );
}
