import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingCreatedBy?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
