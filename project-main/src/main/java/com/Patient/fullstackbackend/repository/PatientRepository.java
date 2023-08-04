package com.Patient.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Patient.fullstackbackend.model.Patient;

public interface PatientRepository extends JpaRepository<Patient,Long> {
}
