import { Grid } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import ActiivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id:string) =>void;
    cancelSelectActivity: () => void;
    editMode :boolean;
    openForm : (id:string) => void;
    closeForm : () => void;
    createOrEdit : (activity :Activity) => void;
    deleteActivity:(id:string ) =>void;
    submitting:boolean;
}

export default function ActivityDashboard({ activities, selectActivity, deleteActivity,
    selectedActivity, cancelSelectActivity, editMode,openForm,closeForm, createOrEdit,submitting }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}
                 selectActivity={selectActivity}
                 deleteActivity={deleteActivity}
                 submitting= {submitting}
                 ></ActivityList>
            </Grid.Column>
            <Grid.Column width='6'>
                { selectedActivity && !editMode && 
                <ActiivityDetails 
                activity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity}
                openForm={openForm}
                />}
                { editMode && 
                <ActivityForm 
                closeForm={closeForm} 
                activity={selectedActivity} 
                createOrEdit={createOrEdit}
                submitting ={submitting}/> }
            </Grid.Column>
        </Grid>

    )
}
