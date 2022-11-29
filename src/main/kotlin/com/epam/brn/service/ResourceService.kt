package com.epam.brn.service

import com.epam.brn.dto.response.ResourceResponse
import com.epam.brn.exception.EntityNotFoundException
import com.epam.brn.model.Resource
import com.epam.brn.repo.ResourceRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class ResourceService(private val resourceRepository: ResourceRepository) {

    fun findFirstResourceByWord(word: String): Resource? {
        val resources = resourceRepository.findByWord(word)
        return if (resources.isNotEmpty()) resources.first() else null
    }
    fun findFirstResourceByWordLike(word: String): Resource? {
        val resources = resourceRepository.findByWordLike(word)
        return if (resources.isNotEmpty()) resources.first() else null
    }

    fun save(resource: Resource): Resource = resourceRepository.save(resource)

    fun updateDescription(id: Long, description: String): ResourceResponse {
        return resourceRepository.findByIdOrNull(id)?.let {
            it.description = description
            resourceRepository.save(it)
            it.toResponse()
        } ?: throw EntityNotFoundException("Resource not found by id=$id")
    }
}
