package com.scb.wb;


import com.hubspot.dropwizard.guice.GuiceBundle;
import com.scb.wb.domains.User;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.db.DataSourceFactory;
import io.dropwizard.hibernate.HibernateBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class BootcampService extends Application<BootcampConfiguration> {

    public static void main(String[] args) throws Exception {
        new BootcampService().run(args);
    }

    private final HibernateBundle<BootcampConfiguration> hibernate = new HibernateBundle<BootcampConfiguration>(User.class) {
        @Override
        public DataSourceFactory getDataSourceFactory(BootcampConfiguration configuration) {
           return configuration.getDataSourceFactory();
        }
    };

    @Override
    public void initialize(Bootstrap<BootcampConfiguration> bootstrap) {
        GuiceBundle<BootcampConfiguration> guiceBundle = GuiceBundle.<BootcampConfiguration>newBuilder()
                                                        .addModule(new BootcampModule())
                                                        .enableAutoConfig(getClass().getPackage().getName())
                                                        .setConfigClass(BootcampConfiguration.class)
                                                        .build();
        bootstrap.addBundle(guiceBundle);
        bootstrap.addBundle(hibernate);
        bootstrap.addBundle(new AssetsBundle());
    }

    @Override
    public void run(BootcampConfiguration bootcampConfiguration, Environment environment) throws Exception {
    }
}
