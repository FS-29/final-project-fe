import ProfilView from "../component/dashboardComp/ProfilVIew";
import SideBarComp from "../component/dashboardComp/SIdeBarComp";

function DashboardPage() {
  return (
    <>
      <div className="flex flex-row font-jakarta">
        <div className="flex flex-col justify-start gap-6 w-1/4 max-w-xs px-4 py-10 border-e-4 border-solid border-gray-200 ">
          <ProfilView></ProfilView>
          <SideBarComp></SideBarComp>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default DashboardPage;
