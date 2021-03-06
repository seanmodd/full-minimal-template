// material
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import Page from '../minimalComponents/Page';
import {
  ComponentHero,
  ComponentOther,
  ComponentFoundation,
  ComponentMaterialUI
} from '../minimalComponents/_external-pages/components-overview';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function ComponentsOverview() {
  return (
    <RootStyle title="Components Overview | Minimal-UI">
      <ComponentHero />
      <Container maxWidth="lg">
        <ComponentFoundation />
        <ComponentMaterialUI />
        <ComponentOther />
      </Container>
    </RootStyle>
  );
}
