import React from 'react';
import Layout from "@src/layouts/Layout";
import BuyPanel from "@src/components/BuyPanel";

const Account: React.FC = () => {
    return (
        <Layout>
            <h1>Account</h1>
            <BuyPanel/>
        </Layout>
    );
}

export default Account;