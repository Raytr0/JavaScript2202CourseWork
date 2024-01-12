class Patient{
    constructor(fullName){
        this.fullName = fullName;
    }
}

class Appointment{
    constructor(patient){
        let patient1 = patient;
        
        this.setPatient = function(patient){
            patient1 = patient;
        }

        this.getPatient = function(){
            return patient1;
        }
    }
    scheduleAppointment(date){
        console.log("An appointment has been scheduled for " + this.getPatient().fullName + " on " + date);
    }
}

class Visit extends Appointment{
    constructor(complaint){
        super();
        let complain = complaint;

        this.setComplaint = function(c){
            complain = c;
        }

        this.getComplaint = function(){
            return complain;
        }
    }
    scheduleAppointment(date){
        console.log(this.getPatient().fullName + "'s appointment's main complaint has been recorded as: " + this.getComplaint());
    }
}

class Procedure extends Appointment{
    constructor(instructions){
        super();
        this.instructions = instructions;
    }
    scheduleAppointment(date){
        console.log("The following pre-procedure instructions have been provided to " + this.getPatient().fullName + ": " + this.instructions);
    }
}

let patientA = new Patient("John Smith");
let patientB = new Patient("Alice Wonder");

let johnAppointment = new Appointment(patientA);
let aliceAppointment = new Appointment(patientB);

let ultraProcedure = new Procedure("Drink 3 glasses of water at least 1 hour before the procedure");
let bloodProcedure = new Procedure("Fast 12h prior to your appointment");

let johnVisit = new Visit("Persistant headaches");
let aliceVisit = new Visit("Yearly physical");

ultraProcedure.setPatient(patientA);
bloodProcedure.setPatient(patientB);
johnVisit.setPatient(patientA);
aliceVisit.setPatient(patientB);

johnAppointment.scheduleAppointment("Jan. 10th");
ultraProcedure.scheduleAppointment();
johnAppointment.scheduleAppointment("Feb. 1st");
johnVisit.scheduleAppointment();
aliceAppointment.scheduleAppointment("Mar. 10th");
bloodProcedure.scheduleAppointment();
aliceAppointment.scheduleAppointment("Apr. 1st");
aliceVisit.scheduleAppointment();


//Do not touch
module.exports.Appointment=Appointment;
module.exports.Visit=Visit;
module.exports.Procedure=Procedure;
module.exports.Patient=Patient;
