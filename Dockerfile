FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build 
WORKDIR /src 
COPY ["CataclysmCalc.csproj", "."] 
RUN dotnet restore "CataclysmCalc.csproj" 
COPY . . 
WORKDIR "/src/." 
RUN dotnet build "CataclysmCalc.csproj" -c Release -o /app/build 
FROM build AS publish

RUN dotnet publish "CataclysmCalc.csproj" -c Release -o /app/publish /p:UseAppHost=false
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final 
WORKDIR /app 
COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS=http://+:8080 
EXPOSE 8080 # Информируем Docker, что приложение слушает порт 8080
ENTRYPOINT ["dotnet", "CataclysmCalc.dll"] 