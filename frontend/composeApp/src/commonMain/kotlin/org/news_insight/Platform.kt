package org.news_insight

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform