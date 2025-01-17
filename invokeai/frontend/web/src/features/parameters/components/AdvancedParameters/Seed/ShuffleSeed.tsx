import { Button } from '@chakra-ui/react';
import { NUMPY_RAND_MAX, NUMPY_RAND_MIN } from 'app/constants';
import { RootState } from 'app/store/store';
import { useAppDispatch, useAppSelector } from 'app/store/storeHooks';
import IAIIconButton from 'common/components/IAIIconButton';
import randomInt from 'common/util/randomInt';
import { setSeed } from 'features/parameters/store/generationSlice';
import { useTranslation } from 'react-i18next';
import { FaRandom } from 'react-icons/fa';

export default function ShuffleSeed() {
  const dispatch = useAppDispatch();
  const shouldRandomizeSeed = useAppSelector(
    (state: RootState) => state.generation.shouldRandomizeSeed
  );
  const { t } = useTranslation();

  const handleClickRandomizeSeed = () =>
    dispatch(setSeed(randomInt(NUMPY_RAND_MIN, NUMPY_RAND_MAX)));

  return (
    <IAIIconButton
      size="sm"
      isDisabled={shouldRandomizeSeed}
      aria-label={t('parameters.shuffle')}
      tooltip={t('parameters.shuffle')}
      icon={<FaRandom />}
      onClick={handleClickRandomizeSeed}
    />
    // <Button
    //   size="sm"
    //   onClick={handleClickRandomizeSeed}
    //   padding="0 1.5rem"
    // >
    //   <p>{t('parameters.shuffle')}</p>
    // </Button>
  );
}
