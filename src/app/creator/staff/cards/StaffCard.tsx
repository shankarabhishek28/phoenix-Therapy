import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '15px',
  margin: '10px',
  maxWidth: 260,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',  // Make the card look clickable
}));

const StaffCard: React.FC<{ name: string; role: string; imageUrl: string }> = ({ name, role, imageUrl }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard/staff/cards/details');
  };

  return (
    <StyledCard onClick={handleClick}>
      <CardMedia
        component="img"
        alt={name}
        height="120"
        image={imageUrl}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ color: '#202020', fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" sx={{ color: '#202020' }}>
          {role}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default StaffCard;
