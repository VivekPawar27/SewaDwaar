// AboutMahitiSetu.jsx
import React from "react";
import { Container, Typography, Box, Card, CardContent, Grid, SpeedDialIcon, SvgIcon, ListItemIcon } from "@mui/material";
import { motion } from "framer-motion";
import InfoIcon from "@mui/icons-material/Info";

import PublicIcon from "@mui/icons-material/Public";
import DataUsageIcon from "@mui/icons-material/DataUsage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const features = [
  {
    icon: <InfoIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Transparent Scheduling",
    description: "Ensures appointment slots and service details are open, accurate, and visible to everyone."
  },
  {
    icon: <PublicIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
    title: "Public & Official Access",
    description: "Connects citizens, reception staff, and department officers in a single streamlined flow."
  },
  {
    icon: <DataUsageIcon sx={{ fontSize: 40, color: "#f57c00" }} />,
    title: "Data-Driven Insights",
    description: "Offers analytics on footfall, wait times, and service demand to improve efficiency and planning."
  },
   {
    icon: <ListItemIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
    title: "Real-Time Updates",
    description: "Delivers instant status changes—approvals, re-schedules, or feedback—so visitors stay informed at every step."
  }
];

export default function AboutMahitiSetu() {
  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          About <span style={{ color: "#1976d2" }}>Sewa Dwaar</span>
        </Typography>
        <Typography variant="body1" align="center" sx={{ maxWidth: 800, mx: "auto", color: "text.secondary", mb: 6 }}>
          Sewa Dwaar is your bridge to hassle-free government appointments.
It helps citizens, officers, and help-desk staff schedule and manage visits with clarity and confidence.
With a clean interface and smart tools, Visitor Connect makes public services quick to reach and easy to track.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    textAlign: "center",
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 4,
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 }
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom>{feature.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
