package com.theplatform.server;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Profile;

@SpringBootTest
@Profile(value = "test")
class ServerApplicationTests {

	@Test
	void contextLoads() {
	}

}
