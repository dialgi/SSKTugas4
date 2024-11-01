import Card from "../component/elements/Card";
import MainLayout from "../component/layout/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <Card title="Total Balance" />
        <Card
          title="Goals"
          desc="lorem ipsum"
        />
        <Card title="Upcoming Bill" />
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <Card 
            title="Recent Transaction" 
            desc="lorem ipsum"
          />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Statistics" />
          <Card title="Expenses Breakdown" />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;