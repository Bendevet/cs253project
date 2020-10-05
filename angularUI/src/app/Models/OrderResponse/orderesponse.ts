import { OrderResponseItem } from './orderResponseItem';

export interface OrderResponse{
  item?: OrderResponseItem,
  isLoading: boolean
}
