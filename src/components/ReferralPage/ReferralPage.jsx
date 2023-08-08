import React from "react";
import { useParams } from "react-router-dom";
import ReferralForm from "./ReferralForm";

function ReferralPage() {
  const { userId, referralId } = useParams();
  return (
    <div>
      <ReferralForm userId={userId} referralId={referralId} />
    </div>
  );
}

export default ReferralPage;
