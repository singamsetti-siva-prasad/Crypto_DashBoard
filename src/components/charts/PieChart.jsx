import React from "react";
import styled from "styled-components";
import { useGetMarketsQuery } from "../../features/api/coinApiSlice";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import SyncLoader from "react-spinners/SyncLoader";

ChartJS.register(ArcElement, Tooltip, Legend);

const Container = styled.div`
  width: 50%;
  height: 100%;
  margin: 1%;
  border-radius: 10px;
  box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 424px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1%;
`;

const Top = styled.div`
  display: flex;
  height: 20%;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  font-weight: 800;
  font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem);
  @media (max-width: 768px) {
    font-size: clamp(1rem, 0.8vw + 0.5rem, 1.5rem);
  }
`;
const TotalValue = styled.p`
  color: gray;
  font-size: calc(0.5vw + 0.5rem);
`;
const Bottom = styled.div`
  width: 100%;
  height: 80%;
`;
const ChartWrapper = styled.div`
  width: 100%;
  height: 200px;
`;

function PieChart() {
  //fetch data
  const { data: marketData, isFetching } = useGetMarketsQuery();

  const data = {
    labels: marketData?.slice(0, 3).map((coin) => coin.name),
    datasets: [
      {
        data: marketData?.slice(0, 3).map((coin) => coin.total_volume),
        backgroundColor: [
          "rgb(236, 107, 86)",
          "rgb(255, 193, 84)",
          "rgb(71, 179, 156)",
        ],
        borderWidth: 1,
        borderColor: "rgb(255, 255, 255)",
      },
    ],
  };

  //chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
    },
    plugins: {
      legend: {
        position: "right",
        align: "center",
        display: true,
        padding: 10,
        labels: {
          color: "rgb(67, 67, 177)",

          font: {
            size: 10,
          },
        },
      },
      datalabels: {
        display: true,
        color: "rgb(255, 255, 255)",
        align: "center",
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = "$" + ((value * 1000) / sum).toFixed(2);
          return percentage;
        },

        labels: {
          title: {
            font: {
              weight: "bold",
              size: 12,
            },
          },
        },
      },
    },
  };

  return (
    <Container>
      <Wrapper>
        <Top>
          <Title>Portfolio</Title>
          <TotalValue>
            Total value <strong>$1000</strong>
          </TotalValue>
        </Top>
        <Bottom>
          <SyncLoader color="rgb(0, 51, 102)" size={10} loading={isFetching} />
          <ChartWrapper>
            <Pie data={data} options={options} plugins={[ChartDataLabels]} />
          </ChartWrapper>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default PieChart;
