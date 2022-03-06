import { Flex, SimpleGrid, Box, Text, Theme } from '@chakra-ui/react';

import { Header } from "../components/header";
import { SideBar } from '../components/sidebar';

import dynamic from 'next/dynamic';

import Charts from 'react-apexcharts';
import { theme } from '../styles/theme';

const chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500]
  },
  grid:{
    show: false,
  },
  dataLabels:{
    enabled: false
  },
  tooltip:{
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks:{
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z'
    ],
    fill:{
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    } 
  }
}

const series = [
  { name: 'series', data: [31, 120, 200, 250, 200, 180, 100] }
]

export default function Dashboard(){
    return(
        <>
          <Header />

          <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <SideBar />  

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
              <Box
                p={["6", "8"]}
                bg="gray.600"
                borderRadius="8"
              >
               <Text>Inscritos da semana</Text>
               <Charts
                 type="area"
                 height={180}
                 series={series}
               />
              </Box>

              <Box
                p="8'"
                bg="gray.600"
                borderRadius="8"
              >
               <Text>Taxa de Abertura</Text>
               <Charts
                 series={series}
                 type="area"
                 height={180}
               />
              </Box>
             
            </SimpleGrid>
          </Flex>
        </>
    )
}