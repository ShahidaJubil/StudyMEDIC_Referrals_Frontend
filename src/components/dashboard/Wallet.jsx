import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { MdStars } from "react-icons/md";
import { GiStarGate } from "react-icons/gi";
import { FaCoins } from "react-icons/fa";
import Divider from "@mui/material/Divider";
import ThickDivider from "./Divider";
import axios from "axios";
import Table from "./Table";
import { Grid } from "@mui/material";

function Wallet() {
  const [user, setUser] = useState([]);
  const url = `${process.env.REACT_APP_BASE_URL}/api/get/`
  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = sessionStorage.getItem("uid");
        const response = await axios.get(url + id);
        setUser(response.data);
        console.log("user information", response);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);
  console.log("get referrals", user);
  console.log("refers", user?.user?.refers);
  console.log("success refers", user?.user?.successReferrals);

  const totalPoints = user?.user?.successReferrals.reduce(
    (total, item) => total + item.points,
    0
  );

  return (
    <>
      <div>
        <Grid container spacing={1}>
          <Grid item lg={8} md={6} sm={12} xs={12}>
            <div>
              <div className="points">
                {/*        className="wallet"*/}
                <h4>Rewards</h4>
                <GiStarGate className="badgeIcon" />
                <br />
                <br />
                {totalPoints} points
              </div>
              <br />
              <div className="list">
                <h4>How to claim your rewards</h4>
                <ul>
                <li>
                  After each successful referral, the referee will receive 1
                  Reward Point against every 1 GBP spent by the referred
                  customer. In this way, if a referred buyer purchases a product
                  for 50GBP, the referrer will receive 50 reward points.
                </li>
                <li>
                Reaching the reward points of upto 2499, the referrer shall be able to redeem upto 4% discounts .
                </li>
                {/* <li>Once the Reward Points reach between 501 and 2500, the referrer becomes eligible for an exclusive up to 4% discounts available in the form of an Amazon Gift Voucher or an equivalent amount that can be used towards the purchase of any course or product on our platform.</li>
                <li>Upon reaching 2501 to 5000 Reward Points, you will qualify for a 6% Reward in the form of an Amazon Gift Voucher or an equivalent amount which can be used for the purchase of any course or products on our platform..</li> */}
                </ul>
              </div>
            </div>
          </Grid>

          <Grid item lg={4} md={6} sm={12} xs={12}>
            <div className="ReferralsDiv">
              <h4> Referrals</h4>
              <ThickDivider />
              {user &&
                user?.user?.successReferrals.map((item, id) => {
                  console.log("item", item);
                  return (
                    <div key={id}>
                      <MdStars className="listIcon" /> {item?.sfname}
                      <br />
                      <span className="referrals">{item?.scourse}</span>
                      <FaCoins className="coin" /> {item?.points}
                      <br />
                      <span className="referrals">{item.duration}</span>
                      <ThickDivider />
                    </div>
                  );
                })}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Wallet;
