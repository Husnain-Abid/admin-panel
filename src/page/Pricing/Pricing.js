import React from 'react';
import Layout from '../../component/Layout/Layout';
import ASSET_PATHS from '../../constant';
import './Pricing.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from 'react-toastify';


export default function Pricing() {
  const imgRoute = ASSET_PATHS.IMG_URL;
  const iconRoute = ASSET_PATHS.ICON_URL;

  // Price information for the plans
  const plans = [
    { name: "Standard", price: "600.00", description: "WordPress Developer, Custom website Developer, Responsive design, Pixel Perfect", duration: "5 working days" },
    { name: "Individual Hire", price: "1500.00", description: "App Developer, Web Developer, Quality assurance, Project Manager, Designer", duration: "30 days subscription" },
    { name: "Team Hire", price: "4000.00", description: "App Developer, Web Developer, Quality assurance, Project Manager, Designer", duration: "Depends on project" }
  ];

  const handleTransactionSuccess = (details) => {
    const name = details.payer.name.given_name;
    toast.success(`Transaction completed successfully by ${name}`);
  };

  const handleTransactionError = () => {
    toast.error('Transaction failed. Please try again.');
  };

  return (
    <>
      <Layout>
      <PayPalScriptProvider options={{ "client-id": "AeOVt0-uKPFtjnlYtMMBoKf0dR6j4tv8EI0FkXibHctvc69HVHIJz-XAorlaF7Pem1mtW5d_ki-TRQ-M" , "components": "buttons", "intent": "capture" }}>
          <div className='pricing'>
            <div className="pricing-section">
              <h2>PRICING</h2>
              <p>Unlock Your Potential With These Plans</p>
              <div className="pricing-cards">

                {plans.map((plan, index) => (
                  <div className="pricing-card" key={index}>
                    <div className="card-header">
                      <h5>{plan.name}</h5>
                      <p className="price">${plan.price} <span>/m</span></p>
                    </div>
                    <div className="card-body">
                      <ul>
                        {plan.description.split(", ").map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      <div className="card-footer">
                        <h5>Duration</h5>
                        <p>{plan.duration}</p>
                        <PayPalButtons
                          style={{ layout: "vertical" }}
                          createOrder={(data, actions) => {
                            return actions.order.create({
                              purchase_units: [{
                                amount: {
                                  value: plan.price, // Plan price
                                },
                                description: plan.name // Plan name
                              }]
                            });
                          }}
                          onApprove={(data, actions) => {
                            return actions.order.capture().then(function(details) {
                              handleTransactionSuccess(details); // On success
                            });
                          }}
                          onError={() => {
                            handleTransactionError(); // On failure
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </PayPalScriptProvider>
      </Layout>
    </>
  );
}
