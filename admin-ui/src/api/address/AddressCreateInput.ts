import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerWhereUniqueInput | null;
  state?: string | null;
  zip?: number | null;
};
