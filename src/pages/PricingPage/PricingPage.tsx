import React, { useState, useEffect, FC } from "react";
import { Row, Col, Card, Typography, Button, List, Divider } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import PaymentModal from "../../components/Modal/PaymentModal";
import styles from "./PricingPage.module.css";
import { MainTitle } from "../../components/Content/ContactSection/ContactTitle";
import { addCredits } from "../../redux/Slices/UserSlice";
import { useDispatch } from "react-redux";

const { Title, Text } = Typography;

interface CreditPackage {
  id: number;
  credits: number;
  price: number;
}

const creditPackages: CreditPackage[] = [
  { id: 1, credits: 10, price: 5 },
  { id: 2, credits: 25, price: 10 },
  { id: 3, credits: 50, price: 18 },
  { id: 4, credits: 100, price: 30 },
];

interface CreditHistoryItem {
  amount: number;
  date: string;
}
interface CreditHistoryProps {
  creditHistory: CreditHistoryItem[];
}

const CreditHistory: FC<CreditHistoryProps> = ({ creditHistory }) => {
  return (
    <div>
      {creditHistory?.length === 0 ? (
        <Text type="secondary">No purchases yet.</Text>
      ) : (
        <List
          bordered
          dataSource={creditHistory}
          renderItem={(item) => (
            <List.Item>
              You bought <b>{item.amount} credits</b> on{" "}
              {new Date(item.date).toLocaleDateString()} at{" "}
              {new Date(item.date).toLocaleTimeString()}
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

const PricingPage: React.FC = () => {
  const [creditHistory, setCreditHistory] = useState<
    { date: string; amount: number }[]
  >([]);
  const [paymentModalIsOpen, setPaymentModalIsOpen] = useState<boolean>(false);
  const [creditsToBuy, setCreditsToBuy] = useState<number>(0);
  const [amountToBuy, setAmountToBuy] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const history = localStorage.getItem("creditHistory");
    if (history) setCreditHistory(JSON.parse(history));
  }, []);

  const handleBuy = (pckg: CreditPackage) => {
    const { credits, price } = pckg;

    // const tempCreditsToBuy = creditsToBuy + credits;
    // const tempAmountToBuy = amountToBuy + price;

    setCreditsToBuy((prev) => prev + credits);
    setAmountToBuy((prev) => prev + price);

    // const newTotal = credits + amount;

    // const newEntry = { date: new Date().toISOString(), amount };
    // const updatedHistory = [...creditHistory, newEntry];

    // setCredits(newTotal);
    // setCreditHistory(updatedHistory);
    // localStorage.setItem("credits", String(newTotal));
    // localStorage.setItem("creditHistory", JSON.stringify(updatedHistory));
    // message.success(`Successfully purchased ${amount} credits!`);
  };

  const handlePaymentModalClose = () => {
    setPaymentModalIsOpen(false);
  };
  const handlePaymentModalOpen = () => {
    setPaymentModalIsOpen(true);
  };
  const handlePay = () => {
    console.log("hanldepay");
    dispatch(addCredits(creditsToBuy));
    setCreditHistory([]);
    setPaymentModalIsOpen(false);
    setCreditsToBuy(0);
    setAmountToBuy(0);
  };

  return (
    <div className={styles.cont}>
      <MainTitle label="Buy Credits" />
      {paymentModalIsOpen && (
        <PaymentModal
          open={paymentModalIsOpen}
          onClose={handlePaymentModalClose}
          onPay={handlePay}
          creditsToBuy={creditsToBuy}
          amount={amountToBuy}
        >
          <p>
            You're about to purchase <strong>{creditsToBuy} credits</strong> for{" "}
            <strong>${amountToBuy}</strong>.
          </p>
        </PaymentModal>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Text style={{ fontSize: "1.2rem", color: "var(--primary-text)" }}>
          Credits to buy:
          <span
            style={{
              marginLeft: "5px",
              color: "var(--primary-color)",
              fontWeight: 600,
            }}
          >
            {creditsToBuy} credits
          </span>
        </Text>
        <Text style={{ fontSize: "1.2rem", color: "var(--primary-text)" }}>
          Purchased amount:
          <span
            style={{
              marginLeft: "5px",
              color: "var(--primary-color)",
              fontWeight: 600,
            }}
          >
            {amountToBuy}$
          </span>
        </Text>
        <Button
          disabled={creditsToBuy === 0}
          type="primary"
          onClick={handlePaymentModalOpen}
        >
          Pay now
        </Button>
      </div>
      <Divider />

      <Title level={4}>Choose a credit package:</Title>
      <Row gutter={[16, 16]}>
        {creditPackages.map((pkg) => (
          <Col xs={24} sm={12} md={12} lg={6} key={pkg.id}>
            <Card
              title={
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <span>{pkg.credits} Credits</span>
                </div>
              }
              style={{
                backgroundColor: "var(--light-primary)",
                borderColor: "var(--divider-color)",
              }}
              headStyle={{
                backgroundColor: "var(--primary-green)",
                color: "#ffffff",
              }}
            >
              {/* <span>
                {pkg.id === 3 && (
                  <Tag color="gold" style={{ marginLeft: 8 }}>
                    {<FaStar />}Most Popular
                  </Tag>
                )}
              </span>
 */}
              <p style={{ color: "var(--sec-text)" }}>Price: {pkg.price}$</p>
              <Button
                type="primary"
                icon={<DollarOutlined />}
                onClick={() => handleBuy(pkg)}
                style={{
                  backgroundColor: "var(--primary-color)",
                  borderColor: "var(--dark-primary)",
                  color: "#000",
                }}
              >
                Buy Now
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Divider />

      <Title level={4}>What are credits used for?</Title>
      <ul style={{ paddingLeft: 20 }}>
        <li>🌐 Buying domains</li>
        <li>🧩 Using templates</li>
        <li>☁️ Hosting your websites</li>
        <li>🔄 Bulk website creation</li>
      </ul>

      <Divider />

      <Title level={4}>Purchase History</Title>
      <CreditHistory creditHistory={creditHistory} />
    </div>
  );
};

export default PricingPage;
