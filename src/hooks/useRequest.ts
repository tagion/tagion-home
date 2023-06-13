import { useState } from "react";
import { toast } from "react-toastify";

interface IUseRequestArguments<T> {
  onSuccess?: (response: T) => void;
  onFailure?: (error: unknown) => void;
}

export interface IRequestFunction<T> {
  (): Promise<{
    data: T;
    status: number;
  }>;
}

export const useRequest = <T>({
  onSuccess,
  onFailure,
}: IUseRequestArguments<T> = {}) => {
  const [error, setError] = useState<Error | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [response, setResponse] = useState<T>();

  const reqHandler = async (req: IRequestFunction<T>): Promise<void> => {
    resetStates();
    setIsPending(true);
    toast.dismiss();
    toast.clearWaitingQueue();

    try {
      const response = await req();
      setResponse(response.data);
      onSuccess && onSuccess(response.data);
      console.log(`Response: ${response.data}.\nStatus: ${response.status}.`);
    } catch (error: unknown) {
      setError(error as Error);
      onFailure && onFailure(error);
      console.error(`Error: ${error}.`);
    }
    setIsPending(false);
  };

  const resetStates = () => {
    error && setError(null);
    response && setResponse(undefined);
  };

  return { response, isPending, error, reqHandler, resetStates };
};
