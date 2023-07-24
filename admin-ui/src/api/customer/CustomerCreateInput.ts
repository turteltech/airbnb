import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type CustomerCreateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderWhereUniqueInput | null;
  phone?: string | null;
};
