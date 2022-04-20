import Form from "../components/Form"
import AwardsInfo from "../components/Forms/AwardsInfo"
import BasicInfo from "../components/Forms/BasicInfo"
import CertificateInfo from "../components/Forms/CertificateInfo"
import EducationInfo from "../components/Forms/EducationInfo"
import PublicationInfo from "../components/Forms/PublicationInfo"
import VolunteerInfo from "../components/Forms/VolunteerInfo"
import WorkInfo from "../components/Forms/WorkInfo"
import LanguageInfo from "../components/Forms/LanguageInfo"
import InterestInfo from "../components/Forms/InterestInfo"
import ReferenceInfo from "../components/Forms/ReferenceInfo"
import ProjectsInfo from "../components/Forms/ProjectsInfo"

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, {useState} from "react";

function TabPanel(props){
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function allyProps(index){
    return{
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Forms(){
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return(
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                    <Tab label="Basic Info" {...allyProps(0)} />
                    <Tab label="Work Experience" {...allyProps(1)} />
                    <Tab label="Volunteer" {...allyProps(2)} />
                    <Tab label="Education" {...allyProps(3)} />
                    <Tab label="Awards" {...allyProps(4)} />
                    <Tab label="Certification" {...allyProps(5)} />
                    <Tab label="Publication" {...allyProps(6)} />
                    <Tab label="Languages" {...allyProps(7)} />
                    <Tab label="Interest" {...allyProps(8)} />
                    <Tab label="Reference" {...allyProps(9)} />
                    <Tab label="Projects" {...allyProps(10)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <BasicInfo/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <WorkInfo />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <VolunteerInfo />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <EducationInfo />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <AwardsInfo/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <CertificateInfo/>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <PublicationInfo/>
            </TabPanel>
            <TabPanel value={value} index={7}>
                <LanguageInfo />
            </TabPanel>
            <TabPanel value={value} index={8}>
                <InterestInfo/>
            </TabPanel>
            <TabPanel value={value} index={9}>
                <ReferenceInfo/>
            </TabPanel>
            <TabPanel value={value} index={10}>
                <ProjectsInfo/>
            </TabPanel>
        </Box>
    );
}
