import BodyLeft1 from "./BodyLeft1"
import BodyLeft2 from "./BodyLeft2"
import Company from "./Company"
import JobDescription from "./JobDescription"
const BodyL = () => {
    return (
        <div className="flex flex-col justify-start items-start w-3/4 h-auto min-h-[86vh] border-r border-gray-200">
            <BodyLeft1 
                postedDays={2}
                salary="$300k-$400k"
                location="Delaware, USA"
                isOpen={true}
                title="Senior Product Designer"
            />
            <BodyLeft2 />
            <JobDescription
                description={[
                    "1. Handle the UI/UX research design",
                    "2. Work on researching on latest web applications designs & trends",
                    "3. Work on conceptualizing and visualizing",
                    "4. Work on creating graphics content and other graphic related works"
                ]}
                benefits={[
                    "Health Insurance",
                    "Provident Fund"
                ]}
                schedule={["Day shift"]}
                payTypes={[
                    "Performance bonus",
                    "Yearly bonus"
                ]}
                workLocation="In person"
            />
            <Company
                companySize="1k - 2k Employees"
                type="Private"
                sector="Information Technology, Infrastructure"
                funding="Bootstrapped"
                foundedYear="2019"
                founders={["Scott Farquhar", "Mike Cannon-Brookes"]}
            />



            
        </div>
    )
}

export default BodyL
