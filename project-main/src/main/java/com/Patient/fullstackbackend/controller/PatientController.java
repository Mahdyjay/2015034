package com.Patient.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.Patient.fullstackbackend.exception.PatientNotFoundException;
import com.Patient.fullstackbackend.model.Patient;
import com.Patient.fullstackbackend.repository.PatientRepository;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/patient")
    Patient newPatient(@RequestBody Patient newPatient) {
        return patientRepository.save(newPatient);
    }

    @GetMapping("/patients")
    List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @GetMapping("/patient/{id}")
    Patient getPatientById(@PathVariable Long id) {
        return patientRepository.findById(id)
                .orElseThrow(() -> new PatientNotFoundException(id));
    }

    @PutMapping("/patient/{id}")
    Patient updatePatient(@RequestBody Patient newPatient, @PathVariable Long id) {
        return patientRepository.findById(id)
                .map(patient -> {
                    patient.setUsername(newPatient.getUsername());
                    patient.setName(newPatient.getName());
                    patient.setEmail(newPatient.getEmail());
                    patient.setPostcode(newPatient.getPostcode());
                    patient.setSymptoms(newPatient.getSymptoms());
                    return patientRepository.save(patient);
                }).orElseThrow(() -> new PatientNotFoundException(id));
    }

    @DeleteMapping("/patient/{id}")
    String deletePatient(@PathVariable Long id){
        if(!patientRepository.existsById(id)){
            throw new PatientNotFoundException(id);
        }
        patientRepository.deleteById(id);
        return  "patient with id "+id+" has been deleted success.";
    }



}
