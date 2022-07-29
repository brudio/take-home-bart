import { MonetaryValue } from "types/MonetaryValue";
import { DataTags } from "utils/dataTags";

import { PriceContainer, PriceBold } from "./Price.style";

const Price = ({ currency, formattedPrice }: MonetaryValue) => {
  return (
    <PriceContainer>
      {currency}
      <PriceBold data-test-id={DataTags.PRICE_VALUE}>{formattedPrice}</PriceBold>
    </PriceContainer>
  );
};

export default Price;
