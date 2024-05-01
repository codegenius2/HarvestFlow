import React from 'react';
import Layout from "@src/layouts/Layout";
import {Box} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@src/components/TabPanel";

const Account: React.FC = () => {

    const [activeTab, setActiveTab] = React.useState(0);

    function a11yProps(index: number) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    return (
        <Layout>
            <div className={"borderBottom"}>
                Every Friday is Harvest Time! Harvest now and get a <strong>+10% Bonus!</strong>
            </div>
            <Box
                sx={{ flexGrow: 1, display: 'flex'}}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={activeTab}
                    onChange={(event, newValue) => setActiveTab(newValue)}
                    sx={{ borderRight: 1, borderColor: 'black' }}
                >
                    <Tab label="Dashboard" {...a11yProps(0)} />
                    <Tab label="Project History" {...a11yProps(1)} />
                    <Tab label="Update" {...a11yProps(2)} />
                    <Tab label="Your NFT" {...a11yProps(3)} />
                    <Tab label="Upcoming Projects" {...a11yProps(4)} />
                </Tabs>
                <TabPanel value={activeTab} index={0}> Dashboard </TabPanel>
                <TabPanel value={activeTab} index={1}> Project History </TabPanel>
                <TabPanel value={activeTab} index={2}> Update </TabPanel>
                <TabPanel value={activeTab} index={3}> Your NFT </TabPanel>
                <TabPanel value={activeTab} index={4}> Upcoming Projects </TabPanel>

            </Box>
        </Layout>
    );
}

export default Account;