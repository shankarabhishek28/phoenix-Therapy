import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '15px',
  padding: " 10px 10px",
  margin: '10px',
  maxWidth: 300,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',  // Make the card look clickable
}));

const StaffCard: React.FC<{ name: string; role: string; imageUrl: string }> = ({ name, role, imageUrl }) => {

  return (
    <StyledCard>
      <CardMedia
        component="img"
        alt={name}
        height="110"
        image={imageUrl}
        title={name}
        style={{borderRadius: "10px"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ color: '#202020', fontWeight: 'bold', textAlign: "center" }}>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" sx={{ color: '#202020', textAlign: "center", fontSize: "0.9rem" }}>
          {role}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default StaffCard;
