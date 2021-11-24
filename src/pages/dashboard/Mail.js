import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// material
import { Container, Card } from '@mui/material';
// redux
// import { useDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getLabels } from '../../redux/slices/mail';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../minimalComponents/Page';
import HeaderBreadcrumbs from '../../minimalComponents/HeaderBreadcrumbs';
import { MailList, MailDetails, MailSidebar, MailCompose } from '../../minimalComponents/_dashboard/mail';

// ----------------------------------------------------------------------

export default function Mail() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { mailId } = useParams();
  console.log('this 📭📭📭📭📭📭📭📭📭📭📭📭📭📭📭📭📭 is mailID from useParams() ', mailId);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openCompose, setOpenCompose] = useState(false);

  const dispatchingLabels = dispatch(getLabels());
  console.log('This 🏷️🏷️🏷️🏷️🏷️🏷️🏷️🏷️ is dispatchingLabels from mail/all.js ', dispatchingLabels);
  useEffect(() => {
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <Page title="Mail | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Mail"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root
            },
            { name: 'Mail' }
          ]}
        />
        <Card sx={{ height: { md: '72vh' }, display: { md: 'flex' } }}>
          <MailSidebar
            isOpenSidebar={openSidebar}
            onCloseSidebar={() => setOpenSidebar(false)}
            onOpenCompose={() => setOpenCompose(true)}
          />
          {mailId ? <MailDetails /> : <MailList onOpenSidebar={() => setOpenSidebar(true)} />}
          <MailCompose isOpenCompose={openCompose} onCloseCompose={() => setOpenCompose(false)} />
        </Card>
      </Container>
    </Page>
  );
}
