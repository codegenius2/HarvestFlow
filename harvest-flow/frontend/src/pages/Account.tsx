import React from 'react';
import Layout from "@src/layouts/Layout";
import BuySell from "@src/components/BuySell";

const Account: React.FC = () => {
    return (
        <Layout>
            <h1>Account</h1>
            <BuySell/>
        </Layout>
    );
}

export default Account;