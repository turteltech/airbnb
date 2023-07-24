import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ListingWhereInput = {
  id?: StringFilter;
  listingCreatedBy?: StringNullableFilter;
  title?: StringFilter;
};
