const app = new Vue({
    el : "#app",
    data : {
        newTask: "",
        info: "Please enter the taskname in the field",
        infoColor:{color:'blue'},
        tasks: [],
        editing_task:"",
    },
    methods:{
        add: function(){
            let thisTask={};
            thisTask.taskname = this.newTask;
            thisTask.completed = false;
            thisTask.editing = false;
            this.tasks.push(thisTask);
            this.created +=1;
            this.newTask = "";
        },
        markComplete: function(index){
            this.tasks[index].completed=true;
        },
        edit_task : function(index){
            this.tasks[index].editing = true;
        },
        edit_complete: function(index){
            this.tasks[index].taskname = this.editing_task;
            this.tasks[index].editing = false;
            this.editing_task="";
        },
        delete_task: function(index){
            this.tasks = this.tasks.filter((task)=>task!=this.tasks[index]);
        }

    },
    computed: {
        created : function(){
            return this.tasks.length;
        },
        completed_tasks : function(){
            let completedArr = this.tasks.filter((task)=>task.completed);
            return completedArr.length;
        },
        pending: function(){
            return this.created - this.completed_tasks;
        }
    },
    watch:{
        newTask: function(newVal){
            if (newVal.length >=6){
                this.info = "Good to go! Add Task";
                this.infoColor = {color:'green'};
            }else {
                this.info = "The task should atleast be 6 characters long.";
                this.infoColor = {color:'red'};
            }
        }
    }
}
)