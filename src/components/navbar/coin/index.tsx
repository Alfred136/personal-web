import Image from 'next/image';
import * as Constants from '@/components/navbar/constants';
import type { CoinProps } from '@/components/navbar/types';

const Coin = (props: CoinProps) => {
  const { showCoin, showCoinBounce, coinPositionY, handleCoinTransitionEnd } = props;
  return (
    <Image
      src={Constants.COIN_IMAGE_SRC}
      alt={Constants.COIN_IMAGE_ALT}
      width={Constants.COIN_IMAGE_WIDTH}
      height={Constants.COIN_IMAGE_HEIGHT}
      unoptimized={true}
      className={`ease-out ${showCoin ? 'opacity-100' : 'opacity-0'}`}
      style={{
        transform: showCoinBounce ? `translateY(${coinPositionY}px)` : 'none',
        transitionDuration: showCoinBounce
          ? `${Constants.COIN_BOUNCE_ANIMATION_DURATION_MS}ms`
          : `${Constants.COIN_ANIMATION_DURATION_MS}ms`
      }}
      onTransitionEnd={handleCoinTransitionEnd}
    />
  );
};

export { Coin };
