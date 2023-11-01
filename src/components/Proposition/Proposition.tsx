import * as SC from "./PropositionStyled";

import { ReactComponent as Ok } from "../../assets/images/prop_ok.svg";
import bg1 from "../../assets/images/bg_prop1.svg"
import bg2 from "../../assets/images/bg_prop2.svg";


const Proposition = () => {
  return (
    <>
      <SC.MainTitleWrapper>
        <SC.MainTitle>Our pricing plans</SC.MainTitle>
        <SC.MainContent>
          We only make money when our creators make money. Our plans are always
          affordable, and it’s completely free to get started.
        </SC.MainContent>
      </SC.MainTitleWrapper>
      <SC.List>
        <SC.Item bg={bg1}>
          <SC.Title>Did your toe</SC.Title>
          <SC.Content>
            Just getting started? No problem at all! Our free plan will take you
            a long way.
          </SC.Content>
          <SC.SubTitle>Free</SC.SubTitle>
          <ul>
            <SC.SubItem>
              <Ok />
              <p>Unlimited products</p>
            </SC.SubItem>
            <SC.SubItem>
              <Ok />
              <p>Basic analytics</p>
            </SC.SubItem>
            <SC.SubItem>
              <Ok />
              <p>Limited marketplace exposure</p>
            </SC.SubItem>
            <SC.SubItem>
              <Ok />
              <p>10% fee per transaction</p>
            </SC.SubItem>
          </ul>
        </SC.Item>
        <SC.Item bg={bg2}>
          <SC.Title>Dive right in</SC.Title>
          <SC.Content>
            Ready for the big time? Our paid plan will help you take your
            business to the next level.
          </SC.Content>
          <SC.PaymentPropositionWrapper>
            <h4>$25.00</h4>
            <p>/ month</p>
          </SC.PaymentPropositionWrapper>
          <ul>
            <SC.SubItem>
              <Ok />
              <p>Custom domain</p>
            </SC.SubItem>
            <SC.SubItem>
              <Ok />
              <p>Advanced analytics and reports</p>
            </SC.SubItem>
            <SC.SubItem>
              <Ok />
              <p>High marketplace visibility</p>
            </SC.SubItem>
            <SC.SubItem>
              <Ok />
              <p>5% fee per transaction</p>
            </SC.SubItem>
          </ul>
        </SC.Item>
      </SC.List>
    </>
  );
};

export default Proposition;
