import { renderHook } from '@testing-library/react-hooks';

import { useForm } from '../../useForm';

describe('sync', () => {
  it('should call sync function when a field has changed', async () => {
    const sync = jest.fn();

    const { result } = renderHook(() => {
      return useForm<{ test: string }>({
        defaultValues: {
          test: 'data',
        },
        sync,
      });
    });

    result.current.register('test');
    result.current.setValue('test', 'data1');
    expect(sync).toBeCalledWith('test', 'data1');
  });
});
