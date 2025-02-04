import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    ActionIcon,
  
  } from '@mantine/core';
  import Image from "next/image";
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
  } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSpotlight } from '@mantine/spotlight';
import { MdSearch } from 'react-icons/md';
  
  const useStyles = createStyles((theme) => ({
    link: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
  
      [theme.fn.smallerThan('sm')]: {
        height: 42,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),
    },
  
    subLink: {
      width: '100%',
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      borderRadius: theme.radius.md,
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      }),
  
      '&:active': theme.activeStyles,
    },
  
    dropdownFooter: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      margin: -theme.spacing.md,
      marginTop: theme.spacing.sm,
      padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
      paddingBottom: theme.spacing.xl,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    hiddenMobile: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    hiddenDesktop: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  }));
  
  const mockdata = [
    {
      icon: IconCode,
      title: 'Artilea AI',
      description: 'Střelecký program pro závody',
      link: "/ai"
    },
    {
      icon: IconCoin,
      title: 'Šipky Artemis',
      description: 'Šipky pro sportovní kuši',
      link: "/artemis"
    },
    {
      icon: IconBook,
      title: 'Elektronické terče',
      description: 'Elektronické terče budoucna',
      link: "/e-target"
    },
    {
      icon: IconFingerprint,
      title: 'Artilea Cloud',
      description: 'Jednotné řešení pro Artilea produkty',
      link: "/cloud"
    },
    {
      icon: IconChartPie3,
      title: 'Measure Me',
      description: 'Analytický nástroj pro trenéry',
      link: "/measure-me"
    },
    {
      icon: IconNotification,
      title: 'Artilea BK',
      description: 'Přesné měření polohy střelce',
      link: "/bk"
    },
  ];
  
  export default function Navbar() {
    const spotlight = useSpotlight();
    const router = useRouter();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();
  
    const links = mockdata.map((item) => (
      <Link  key={item.title} href={item.link}>
        <UnstyledButton className={classes.subLink}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
      </Link>
    ));
  
    return (
      <Box  sx>
        <Header height={70} px="md" sx={{width: "70vw", position: "fixed", margin: "0 auto 0 auto", border: "none", borderRadius: '0px 0px 8px 8px',  padding: "0 !important"}}>
          <Group position="apart" sx={{ height: '100%', padding: "0 2vw" }}>
            <div style={{  minHeight: '5%',
            minWidth: '8%',
            cursor: "pointer",
            display: 'block',
            position: 'relative',
            
            aspectRatio: '626 / 222',}} onClick={()=> {router.push("/")}}>


          <Image src="/artilea_transparent.png" alt="logo" fill />
      
            </div>
  
            <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
              <a href="#" className={classes.link}>
                Hlavní strana
              </a>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Produkty
                      </Box>
                      <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                  <Group position="apart" px="md">
                    <Text weight={500}>Produkty</Text>
                    <Anchor href="#" size="xs">
                      View all
                    </Anchor>
                  </Group>
  
                  <Divider
                    my="sm"
                    mx="-md"
                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                  />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group position="apart">
                      <div>
                        <Text weight={500} size="sm">
                         Nevíte kde začít?
                        </Text>
                        <Text size="xs" color="dimmed">
                          Podívejte se na přehled všech produktů
                        </Text>
                      </div>
                     <Link href="/produkty"> <Button variant="default">Přehled produktů</Button></Link>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <Link href="#" className={classes.link}>
                O nás
              </Link>
              <Link href="#" className={classes.link}>
                Kontakt
              </Link>
            </Group>
  
            <Group className={classes.hiddenMobile}>
            <ActionIcon color="dark" onClick={spotlight.openSpotlight}>
        <MdSearch />
        </ActionIcon>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
          </Group>
        </Header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <a href="#" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Produkty
                </Box>
                <IconChevronDown size={16} color={theme.fn.primaryColor()} />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Kontakt
            </a>
  
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <Group position="center" grow pb="xl" px="md">
            <Link href="https://www.shop.artilea.eu"><Button sx={{backgroundColor: "#ff5d39", color: "#131641"}} variant="gradient" gradient={["#ff5d39", "#131641"]}>Our shop</Button></Link>
            </Group>
          </ScrollArea>
        </Drawer>
        <Link href="https://www.shop.artilea.eu" className={classes.hiddenMobile}><Button sx={{position: "absolute", right: "2vw", backgroundColor: "#ff5d39", color: "#131641", height: "6vh", top: "0.8vh"}} variant="gradient" gradient={["#ff5d39", "#131641"]}><Text size="md">Our shop</Text></Button></Link>
      </Box>
    );
  }