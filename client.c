#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>
#include <unistd.h>

struct sockaddr_in* createIPv4Address(char *ip, int port) {
    struct sockaddr_in *address = malloc(sizeof(struct sockaddr_in));
    address->sin_family = AF_INET;
    address->sin_port = htons(port);
    inet_pton(AF_INET, ip, &address->sin_addr);
    return address;
}

int createTCPIPv4Socket(void) {
    return socket(AF_INET, SOCK_STREAM, 0);
}

int main() {
    int socketFD = createTCPIPv4Socket();

    struct sockaddr_in *address = createIPv4Address("127.0.0.1", 2000);

    connect(socketFD, (struct sockaddr*)address, sizeof(*address));

    char *message = "Hello from client";
    send(socketFD, message, strlen(message), 0);

    char buffer[1024];
    int bytesReceived = recv(socketFD, buffer, sizeof(buffer) - 1, 0);

    buffer[bytesReceived] = '\0';
    printf("%s\n", buffer);

    free(address);
    close(socketFD);

    return 0;
}